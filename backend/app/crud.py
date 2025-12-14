from sqlalchemy.orm import Session
from .models import Product

def get_products_by_category(db: Session, category: str):
    return db.query(Product).filter(Product.category == category).all()

def get_product_by_id(db: Session, product_id: str):
    return db.query(Product).filter(Product.id == product_id).first()

def get_featured_products(db: Session):
    return db.query(Product).filter(Product.featured == True).all()
