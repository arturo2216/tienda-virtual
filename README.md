## GroceryApp — Tienda Virtual

Aplicación web de tienda virtual estilo supermercado, desarrollada como proyecto académico en el SENA. Permite a los usuarios registrarse, iniciar sesión, explorar productos por categoría y gestionar pedidos.

## Tecnologías usadas

- **Backend:** Python + Flask
- **Base de datos:** SQLite3 (via `flask-sqlite3`)
- **Frontend:** HTML, CSS, JavaScript
- **Autenticación:** Werkzeug (hash de contraseñas + sesiones)
- **ORM:** Blinker / AntiORM

## Funcionalidades

- Registro e inicio de sesión de usuarios con contraseña encriptada
- Catálogo de productos organizado por categorías
- Vista de detalle de producto
- Sistema de pedidos
- Panel de perfil de usuario
- Dashboard administrativo
- Comentarios en productos

## Estructura del proyecto

```
GroceryApp/
├── src/
│   ├── app.py              # Aplicación principal Flask
│   ├── static/
│   │   ├── css/            # Estilos por página
│   │   ├── js/             # Scripts del frontend
│   │   └── logo app/       # Imágenes y recursos
│   └── templates/          # Vistas HTML (Jinja2)
│       ├── Iniciar_sesión.html
│       ├── Productos.html
│       ├── Categorias.html
│       ├── Pedidos.html
│       ├── perfil.html
│       └── dashb.html
├── requirements.txt
└── README.md
```

## Cómo ejecutar el proyecto

**1. Clona el repositorio:**
```bash
git clone https://github.com/arturo2216/tienda-virtual.git
cd tienda-virtual
```

**2. Crea y activa el entorno virtual:**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

**3. Instala las dependencias:**
```bash
pip install -r requirements.txt
```

**4. Ejecuta la aplicación:**
```bash
cd src
python app.py
```

**5. Abre en el navegador:**
```
http://127.0.0.1:5000
```

## Desarrollado por

**Arturo José Alfaro Morales**  
Aprendiz SENA — Análisis y Desarrollo de Software  
[arturojosealfaromorales@gmail.com](mailto:arturojosealfaromorales@gmail.com)
