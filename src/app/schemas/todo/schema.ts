import * as zod from 'zod'

export const createTodoSchema = zod.object({
    title: zod.string({
        required_error: "Debes darle un título a tu tarea",
        invalid_type_error: "El título debe ser un texto"
    })
        .min(1, "Título muy corto").max(100, "Título demasiado largo"),

    description: zod.string({
        invalid_type_error: "La descripción debe ser un texto"
    })
        .max(200, "Descripción demasiado larga").optional()
});


export const updateTodoSchema = zod.object({
    title: zod.string({
        invalid_type_error: "El título debe ser un texto"
    })
        .min(1, "Título muy corto").max(100, "Título demasiado largo").optional(),

    description: zod.string({
        invalid_type_error: "La descripción debe ser un texto"
    })
        .min(1, "Descripción muy corta").max(200, "Descripción demasiado larga").optional(),

    completed: zod.boolean({
        invalid_type_error: "Debe ser un valor booleano"
    }).optional()
});