from sqlalchemy import Column, String, Float, Boolean, ARRAY
from app.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    description = Column(String, nullable=False)
    category = Column(String, nullable=False)
    images = Column(ARRAY(String), nullable=False)
    sizes = Column(ARRAY(String), nullable=False)
    colors = Column(ARRAY(String), nullable=False)
    in_stock = Column(Boolean, default=True)
    featured = Column(Boolean, default=False)
