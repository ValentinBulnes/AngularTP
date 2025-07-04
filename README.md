Este proyecto es una aplicación web de comercio electrónico para una tienda de vinos, desarrollada como trabajo final del Seminario Angular 2025 utilizando el framework Angular.

Vinoteca es una Single Page Application (SPA) que permite a los usuarios explorar un catálogo de vinos, agregarlos a un carrito de compras y registrarse en la plataforma.

Catálogo de Vinos: Muestra una lista de vinos obtenidos desde una API externa. Cada vino muestra su imagen, nombre, tipo, región, año, precio y stock.
El stock se actualiza dinámicamente cuando un usuario agrega productos al carrito.

Carrito de Compras: El servicio WineCartService gestiona el estado del carrito, permitiendo que los componentes se comuniquen y muestren los productos agregados en tiempo real.

Componente de Cantidad: Se implementó un componente reutilizable InputIntegerComponent con comunicación @Input y @Output para manejar la selección de la cantidad de productos.

Ruteo: La aplicación cuenta con un sistema de ruteo que define las diferentes secciones: Catálogo, Sobre Nosotros y Registro.

Formulario Reactivo: La sección de registro utiliza un Formulario Reactivo de Angular con validaciones personalizadas, como la confirmación de contraseña.

Consumo de API Externa: Se utiliza HttpClient para realizar solicitudes GET y POST a una API de MockAPI, demostrando la integración de datos externos para obtener productos y crear usuarios.


Nombre y Apellido: Valentin Bulnes

DNI: 41.873.050

Email: bulnesvalentin@gmail.com

Sede: Tandil