from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Product
from pydantic import BaseModel
from typing import List

class ProductSchema(BaseModel):
    id: str
    name: str
    price: float
    description: str
    category: str
    images: List[str]
    sizes: List[str]
    colors: List[str]
    in_stock: bool
    featured: bool

    class Config:
        from_attributes = True  # Pydantic V2

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/products/category/{category}", response_model=List[ProductSchema])
def get_products_by_category(category: str, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.category == category).all()

@app.get("/products/{product_id}", response_model=ProductSchema)
def get_product(product_id: str, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.id == product_id).first()

@app.get("/products/featured", response_model=List[ProductSchema])
def get_featured_products(db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.featured == True).all()
