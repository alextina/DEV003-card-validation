# CARD VALIDATION

# Validación de Tarjeta

[Link de la página desplegada](https://alextina.github.io/DEV003-card-validation/)

## Introducción:

En este proyecto se ha construido una aplicación web que permite al usuario validar el número de una tarjeta de crédito, así como ocultar todos los dígitos de una tarjeta menos los últimos cuatro.
Para la principal función, la de validación de la tarjeta, se aplicó el algoritmo de Luhn, también conocido como algoritmo de módulo 10.

### Uso de la aplicación:

Ambas funcionalidades se han implementado a la web del emprendimiento “Christine Bisutería” para que los usuarios puedan validar su tarjeta de una forma segura, antes de realizar la compra. 
Hay un campo en el que usuario puede ingresar solo números (de 13 a 16 dígitos) y al hacer clic en el botón “validar” le retornará gracias a la función “isValid” si la tarjeta es o no válida, y además el número estará oculto debido a la función “maskify”.

Ejemplo: 

El usuario ingresa: 4083952015263
Y la aplicación retornará:  #########5263

Imágenes de su funcionamiento:

![Imágenes de su funcionamiento 1](https://i.postimg.cc/XvZ5wWQz/card-validation-ACCA-1.png)
![Imágenes de su funcionamiento 2](https://i.postimg.cc/htZxzvbm/card-validation-ACCA-2.png)
![Imágenes de su funcionamiento 3](https://i.postimg.cc/q793wFFM/card-validation-ACCA-3.png)

## Pila de tecnología:

### Interfaz

`HTML` `CSS` `JavaScript`

## Descripción de scripts/archivos

* `index.html`: Este es el punto de entrada a la aplicación, la estructura y textos de la página.

* `index.js`: Aquí se escucha los eventos del DOM y se invocan a validator.isValid() y validator.maskify() según sea necesario y actualizar el resultado en la UI (interfaz de usuario). 

* `validator.js`: Aquí se implementa el objeto validator() y contiene los métodos isValid() y maskify().

* `style.css`: Este archivo contiene las reglas de estilo de la página.
