from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import crud, schemas

router = APIRouter(prefix="/products")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/category/{category}", response_model=list[schemas.ProductBase])
def read_products_by_category(category: str, db: Session = Depends(get_db)):
    return crud.get_products_by_category(db, category)

@router.get("/featured", response_model=list[schemas.ProductBase])
def read_featured_products(db: Session = Depends(get_db)):
    return crud.get_featured_products(db)

@router.get("/{product_id}", response_model=schemas.ProductBase)
def read_product(product_id: str, db: Session = Depends(get_db)):
    return crud.get_product_by_id(db, product_id)
