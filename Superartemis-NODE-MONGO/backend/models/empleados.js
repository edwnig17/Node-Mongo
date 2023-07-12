import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
    Apellido: {
        type: String,
        required: true,
        trim: true,
    },
    Nombre: {
        type: String,
        required: true,
        trim: true,
    },
    Titulo: {
        type: String,
        required: true,
        trim: true,
    },
    TituloCortesia : {
        type: String,
        required: true,
        trim: true,
    },
    FechaNacimiento: {
        type: String,
        required: true,
        trim: true,
    },
    FechaContratacion: {
        type: String,
        required: true,
        trim: true,
    },
    Direccion: {
        type: String,
        required: true,
        trim: true,
    },
    Ciudad: {
        type: String,
        required: true,
        trim: true,
    },
    Regiones: {
        type: String,
        required: true,
        trim: true,
    },
    CodigoPostal: {
        type: String,
        required: true,
        trim: true,
    },
    Pais: {
        type: String,
        required: true,
        trim: true,
    },
    Telefono: {
        type: String,
        required: true,
        trim: true,
    },
    Extension: {
        type: String,
        required: true,
        trim: true,
    },
    Foto: {
        type: String,
        required: true,
        trim: true,
    },
    Notas: {
        type: String,
        required: true,
        trim: true,
    },
    Jefe: {
        type: String,
        required: true,
        trim: true,
    },
    RutaFoto: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Empleado = mongoose.model('empleado', empleadosSchema);

    export default Empleado;