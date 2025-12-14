from pydantic import BaseModel
from typing import List

class ProductBase(BaseModel):
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
        form_mode = True
