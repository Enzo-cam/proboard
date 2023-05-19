import nodemailer from "nodemailer";

export const emailRegister = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "249d12b0f66eb7",
      pass: "37029d83df2078",
    },
  });

    //Info del mail

    const info = await transport.sendMail({
        from: '"ProBoard" <cuentas@proboard.com>',
        to: email,
        subject: "Confirmacion de Cuenta - ProBoard",
        text: "Confirme su cuenta para empezar a utilizar ProBoard y manejar sus proyectos a gusto.",
        html: `<p> Bienvenido a ProBoard ${nombre}, para empezar a utilizar los servicios disponibles de nuestra web debes confirmar tu cuenta</p>
        <p>Ingresando al siguiente enlace podras comprobar tu cuenta: 

        <a href="${process.env.FRONT_URL}/confirmar/${token}">Confirmar cuenta</a>

        <p>En caso de no haber creado una cuenta, ignorar el mensaje</p>
        `
    })
};
