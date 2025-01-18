from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/products', methods=['GET'])
def get_products():
    products = [
        {
            "cod": "001",
            "referencia": "ref001",
            "nombre": "Camiseta Deportiva",
            "descripcion_corta": "Camiseta cómoda para deporte",
            "descripcion_larga": "Camiseta de poliéster ideal para actividades deportivas, transpirable y ligera.",
            "detalles": "100% poliéster, lavable a máquina",
            "modelo": "SportFit",
            "talla": "M",
            "precio": 25.99,
            "descuento": 10,
            "marca": "DeportivaPro",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/222512-6143_2_1_1d6fde64-5e88-4117-a1fd-56886e013152.jpg?v=1736846153"
        },
        {
            "cod": "002",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
                {
            "cod": "003",
            "referencia": "ref003",
            "nombre": "Sudadera Casual",
            "descripcion_corta": "Sudadera con capucha cómoda",
            "descripcion_larga": "Sudadera de algodón suave, ideal para uso diario o para el gimnasio.",
            "detalles": "Algodón 80%, poliéster 20%, lavable a máquina",
            "modelo": "CozyHood",
            "talla": "L",
            "precio": 34.99,
            "descuento": 5,
            "marca": "CasualWear",
            "foto": "https://example.com/sudadera.jpg"
        },
        {
            "cod": "004",
            "referencia": "ref004",
            "nombre": "Pantalón Chándal",
            "descripcion_corta": "Pantalón cómodo y ligero",
            "descripcion_larga": "Pantalón de chándal con bolsillos laterales, ajustable en la cintura.",
            "detalles": "Material sintético, lavable a máquina",
            "modelo": "TrackFit",
            "talla": "XL",
            "precio": 29.99,
            "descuento": 20,
            "marca": "ActiveWear",
            "foto": "https://example.com/pantalon.jpg"
        },
        {
            "cod": "005",
            "referencia": "ref005",
            "nombre": "Mochila Deportiva",
            "descripcion_corta": "Mochila multiusos para deporte",
            "descripcion_larga": "Mochila resistente con múltiples compartimentos y correas ajustables.",
            "detalles": "Nylon resistente al agua",
            "modelo": "SportBag",
            "talla": "Única",
            "precio": 49.99,
            "descuento": 10,
            "marca": "GearUp",
            "foto": "https://example.com/mochila.jpg"
        },
        {
            "cod": "006",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
        {
            "cod": "007",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
        {
            "cod": "008",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
        {
            "cod": "009",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
        {
            "cod": "010",
            "referencia": "ref002",
            "nombre": "Zapatillas Running",
            "descripcion_corta": "Zapatillas ligeras para correr",
            "descripcion_larga": "Zapatillas diseñadas para running con suela amortiguada y material transpirable.",
            "detalles": "Material sintético, disponible en varios colores",
            "modelo": "RunMaster",
            "talla": "42",
            "precio": 59.99 ,
            "descuento": 15,
            "marca": "RunnerX",
            "foto": "https://shop.realbetisbalompie.es/cdn/shop/files/5715598368207_13_a545ad40-a655-4f49-93cd-120f3bf2bb2c.jpg?v=1736846164"
        },
    ]

    return jsonify(products)

if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)

