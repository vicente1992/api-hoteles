# Api de hoteles

Aplicación de hoteles que transmite unos datos json al frontend y realiza un crud

## Instalación de dependencias

Una vez descargado o clonado el repositorio por favor ejecute el comando `npm install`
para instalar las dependencias

## Servidor de desarrollo

Luego de instalar las dependencias por favor ejecutar el comando `npm run dev`
ejecutar la aplicacion en modo desarrollo

## CRUD

## Rutas del crud

## Crear un hotel

Por medio del metodo post a la ruta `http://localhost:4000/api/v1/hotels` y ingresando los siguientes
parametro ` name: 'Nombre del Hotel', stars: numero de estrellas,price: precio,image:'4900059_30_b.jpg',amenities:["safety-box", "nightclub", "deep-soaking-bathtub", "beach", "business-center"]`,
se crea un nuevo hotel.

## Obtener todos los hoteles

Por medio del metodo get a la ruta `http://localhost:4000/api/v1/hotels/getHotels`, se obtienen todos los hoteles registrados.

## obtener un hotel

por medio del metodo get a la ruta `http://localhost:4000/api/v1/hotels/6016280b82c0340078e5b141` y
pasandole un id como parametro, se obtiene el hotel con el id ingresado.

## Actulizar un hotel

Por medio del metodo put a la ruta `http://localhost:4000/api/v1/hotels/6016280b82c0340078e5b141` y
pasandole un id como parametro, mas los parametros a actulizar
` name: 'Nombre del Hotel', stars: numero de estrellas,price: precio,image:'4900059_30_b.jpg',amenities:["safety-box", "nightclub", "deep-soaking-bathtub", "beach", "business-center"]`,
se actualiza un hotel

## Eliminar un hotel

por medio del metodo delete a la ruta `http://localhost:4000/api/v1/hotels/6016280b82c0340078e5b141` y
pasandole un id como parametro, se elimina el hotel con el id ingresado.
