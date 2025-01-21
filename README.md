# To-do APP 

Este proyecto es un administrador minimalista para tus tareas. La App permite visualizar, crear, editar y borrar tareas de una manera sencilla y amigable con el usuario. Puedes darle un título y una descripción (opcional) a cada tarea y también marcarla como completada en la pantalla principal. La información posee persistencia gracias a su conexión mediante Supabase a una base de datos Postgresql 

## Funcionalidades:
- Crear, editar y borrar tareas: Añade nuevas tareas, edita las existentes o elimínalas cuando ya no sean necesarias.
- Marcar como completada: Marca tareas como completadas para llevar un registro de tu progreso.
- Persistencia de datos: Las tareas se guardan de manera segura en una base de datos PostgreSQL a través de Supabase.
- Interfaz sencilla y amigable: Gestiona tus tareas de forma rápida y fácil con una interfaz intuitiva


## Instrucciones de configuración y ejecución:

(Verificar tener NodeJs en v.14 o superior)

1. Clonar el repositorio:
  
   git clone https://github.com/JEstebanGnz/to-do-app

2. Ir a la raíz del proyecto y ejecutar:

    npm install

3. Duplicar el archivo "env.example" y renombrarlo a ".env" (El archivo contiene la variable de conexión a la base de datos postgresql en Supabase)

4. Luego, montar el build de producción:

    npm run build

5. Finalmente, correr la app

    npm start
