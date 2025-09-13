# *APLICACIÓN PARA VENTA DE ARREGLOS FLORALES*

El proyecto consiste en desarrollar una **aplicación web para la venta de arreglos florales**, que permitirá a los usuarios explorar un catálogo de ramos prediseñados según el tipo de evento, como cumpleaños, bodas o aniversarios, así como crear ramos personalizados seleccionando flores, colores y accesorios. La plataforma ofrecerá una interfaz intuitiva y responsiva, permitirá gestionar pedidos de manera segura y proporcionará información detallada sobre cada arreglo. Además, contará con funcionalidades que faciliten la administración de productos y pedidos, garantizando eficiencia y escalabilidad para futuras mejoras del sistema.

## *1. Arquitectura del Proyecto*

La aplicación se desarrollará bajo una **arquitectura multicapa**, separando claramente la presentación, la lógica de negocio y la gestión de datos. El **frontend**, construido en **React**, será responsable de la interacción con los usuarios y consumirá información a través de una **API RESTful**. El **backend**, implementado en **Django (Python)** y complementado con **Django REST Framework**, gestionará la lógica de negocio, la administración de usuarios y la comunicación con la base de datos.

Para el almacenamiento de información se utilizará inicialmente **SQLite**, la base de datos integrada en Django, con la posibilidad de migrar a **MySQL** en fases posteriores para mejorar la escalabilidad y el rendimiento. Esta arquitectura permite un mantenimiento más sencillo, facilita la incorporación de nuevas funcionalidades como pasarelas de pago y garantiza la adaptabilidad del sistema para futuras aplicaciones móviles.

## *2. Librerías Utilizadas*

En el **backend** se emplearán las siguientes librerías: **Django** como framework principal, **Django REST Framework** para la creación de la API, **psycopg2** como conector de la base de datos y **Pillow** para el manejo de imágenes de los arreglos florales.

En el **frontend**, se utilizarán **React** como biblioteca principal, **Axios** para las peticiones HTTP hacia la API y **React Router** para la navegación entre las diferentes vistas de la aplicación.

## *3. Tecnologías Utilizadas*

El desarrollo del proyecto se basa en **Python** para el backend y **JavaScript** para el frontend. La interfaz de usuario se implementará con **React**, complementada con **HTML5** y **CSS3** para la estructura y el diseño de las páginas, y con **Bootstrap 5** para asegurar un diseño responsivo y adaptable a distintos dispositivos. La base de datos se gestionará inicialmente con **SQLite**, con posibilidad de migrar a **MySQL** en etapas posteriores, garantizando estabilidad, seguridad y compatibilidad con Django.
