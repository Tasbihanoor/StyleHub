import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import SessionLocal, engine
from app.models import Product, Base
from app.seed_data import products  
# Create tables
Base.metadata.create_all(bind=engine)

def seed_db():
    db = SessionLocal()
    for item in products:
        db_product = Product(**item)
        db.add(db_product)
    db.commit()
    db.close()

if __name__ == "__main__":
    seed_db()
    print("Products seeded successfully!")
