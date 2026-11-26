import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { FEATURES, SITE } from "@/lib/site";

export type LegalSection = { id: string; title: string; body: ReactNode };

/**
 * Texto del Aviso de privacidad (ES/EN).
 *
 * Describe lo que el sitio hace HOY: formulario de contacto, datos técnicos y
 * la foto del hero servida por Unsplash. Las postulaciones sólo aparecen si
 * `FEATURES.careers` está activo. Si se agrega analítica, cookies o nuevos
 * formularios, hay que actualizar este texto.
 *
 * Basado en la LFPDPPP (México) y el RGPD (España / UE). Debe revisarlo el
 * área legal antes de publicar.
 */
export function privacySections(lang: Lang): LegalSection[] {
  const { controller, address, privacyEmail } = SITE.legal;
  const mail = (
    <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
  );
  const careers = FEATURES.careers;

  if (lang === "en") {
    return [
      {
        id: "controller",
        title: "Who is responsible for your data",
        body: (
          <p>
            {controller}, with its address at {address}, is responsible for the processing of the personal data
            you provide through this website. For any matter related to this notice or to your data, write to us
            at {mail}.
          </p>
        ),
      },
      {
        id: "data",
        title: "What data we collect",
        body: (
          <>
            <ul>
              <li>
                <strong>Contact form:</strong> full name, email address and the content of your message.
              </li>
              {careers && (
                <li>
                  <strong>Job applications:</strong> full name, email address, phone number, a link to your
                  professional profile or résumé, and the position you apply for.
                </li>
              )}
              <li>
                <strong>Technical data:</strong> when you submit a form we record the site language and your
                browser information (user agent) to prevent abuse and spam. Our hosting providers may
                temporarily log your IP address and connection data for security purposes.
              </li>
            </ul>
            <p>
              We do not request sensitive personal data. Please do not include it in your messages.
            </p>
          </>
        ),
      },
      {
        id: "purposes",
        title: "What we use your data for",
        body: (
          <>
            <p>We use your data only for the following purposes, which are necessary to respond to you:</p>
            <ul>
              <li>Respond to and follow up on your requests, questions or proposals.</li>
              {careers && <li>Evaluate your application and contact you about the selection process.</li>}
              <li>Keep the website secure and prevent fraudulent use.</li>
            </ul>
            <p>
              We do not use your data for marketing, advertising or commercial prospecting without your prior
              consent.
            </p>
          </>
        ),
      },
      {
        id: "legal-basis",
        title: "Legal basis (European Economic Area)",
        body: (
          <p>
            If you are in the European Economic Area, we process your data to take steps at your request before
            entering into a possible relationship with us and on the basis of our legitimate interest in
            responding to the communications we receive and protecting the website (Article 6(1)(b) and (f)
            GDPR).
          </p>
        ),
      },
      {
        id: "sharing",
        title: "Who we share your data with",
        body: (
          <>
            <p>We do not sell or rent your personal data. We may share it only with:</p>
            <ul>
              <li>
                Companies of Grupo STF in Honduras, Mexico and Spain, when necessary to handle your request,
                under the same privacy practices described here.
              </li>
              <li>
                Technology providers that host the website and its database (Vercel Inc. and Supabase Inc.)
                and that email us the messages we receive (Resend Inc.), which act on our behalf and following
                our instructions.
              </li>
              <li>Competent authorities, when required by law.</li>
            </ul>
          </>
        ),
      },
      {
        id: "transfers",
        title: "International transfers",
        body: (
          <p>
            Our providers may store or process data on servers located outside your country, including the
            United States. When data originates in the European Economic Area, these transfers are carried out
            with appropriate safeguards, such as the standard contractual clauses approved by the European
            Commission.
          </p>
        ),
      },
      {
        id: "retention",
        title: "How long we keep your data",
        body: (
          <p>
            We keep contact data for as long as necessary to handle your request and for up to 24 months after
            our last communication
            {careers && "; application data, for up to 12 months after the selection process closes"}, unless a
            longer period is required by law. After that, we delete or anonymize it.
          </p>
        ),
      },
      {
        id: "rights",
        title: "Your rights",
        body: (
          <>
            <p>
              You may access, rectify, erase or object to the processing of your data and, where applicable,
              request the restriction of processing, data portability, or withdraw your consent, as well as limit
              the use or disclosure of your data.
            </p>
            <p>
              To exercise these rights, write to {mail} with the subject “Privacy rights” and include: your full
              name, a way for us to reply, a clear description of the right you wish to exercise and the data
              concerned, and a document proving your identity (or that of your representative). We will reply
              within the time limits set by applicable law (for example, 20 business days in Mexico or one month
              in the European Union).
            </p>
            <p>
              If you believe your rights have not been respected, you may file a complaint with the competent
              data protection authority; in Spain, the Spanish Data Protection Agency (
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
                www.aepd.es
              </a>
              ).
            </p>
          </>
        ),
      },
      {
        id: "cookies",
        title: "Cookies and similar technologies",
        body: (
          <p>
            This website does not use advertising, analytics or tracking cookies; it only relies on the technical
            resources required to display it. The main photograph is loaded from an external image provider
            (Unsplash), which may receive technical data such as your IP address when displaying it.
          </p>
        ),
      },
      {
        id: "security",
        title: "Security",
        body: (
          <p>
            We apply reasonable administrative, technical and physical measures to protect your data, including
            encrypted connections (HTTPS) and access to the database restricted to authorized personnel.
          </p>
        ),
      },
      {
        id: "minors",
        title: "Minors",
        body: (
          <p>This website is not directed at people under 18. If you are a minor, please do not send us personal data.</p>
        ),
      },
      {
        id: "changes",
        title: "Changes to this notice",
        body: (
          <p>
            We may update this notice to reflect legal or operational changes. The current version will always
            be available on this page with its date of last update.
          </p>
        ),
      },
    ];
  }

  return [
    {
      id: "responsable",
      title: "Responsable del tratamiento",
      body: (
        <p>
          {controller}, con domicilio en {address}, es responsable del tratamiento de los datos personales que nos
          proporciones a través de este sitio web. Para cualquier asunto relacionado con este aviso o con tus
          datos, escríbenos a {mail}.
        </p>
      ),
    },
    {
      id: "datos",
      title: "Datos que recabamos",
      body: (
        <>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> nombre completo, correo electrónico y el contenido de tu
              mensaje.
            </li>
            {careers && (
              <li>
                <strong>Postulaciones:</strong> nombre completo, correo electrónico, teléfono, enlace a tu perfil
                profesional o CV y la vacante a la que te postulas.
              </li>
            )}
            <li>
              <strong>Datos técnicos:</strong> al enviar un formulario registramos el idioma del sitio y la
              información de tu navegador (user agent) para prevenir abusos y spam. Nuestros proveedores de
              alojamiento pueden registrar de forma temporal tu dirección IP y datos de la conexión por motivos de
              seguridad.
            </li>
          </ul>
          <p>No solicitamos datos personales sensibles. Te pedimos no incluirlos en tus mensajes.</p>
        </>
      ),
    },
    {
      id: "finalidades",
      title: "Finalidades del tratamiento",
      body: (
        <>
          <p>Utilizamos tus datos únicamente para las siguientes finalidades, necesarias para atenderte:</p>
          <ul>
            <li>Atender y dar seguimiento a tus solicitudes, preguntas o propuestas.</li>
            {careers && <li>Evaluar tu candidatura y contactarte sobre el proceso de selección.</li>}
            <li>Mantener la seguridad del sitio y prevenir usos fraudulentos.</li>
          </ul>
          <p>
            No utilizamos tus datos para fines de mercadotecnia, publicidad ni prospección comercial sin tu
            consentimiento previo.
          </p>
        </>
      ),
    },
    {
      id: "base-legal",
      title: "Base legal (Espacio Económico Europeo)",
      body: (
        <p>
          Si te encuentras en el Espacio Económico Europeo, tratamos tus datos para aplicar, a tu petición,
          medidas previas a una posible relación con nosotros y con base en nuestro interés legítimo en responder
          las comunicaciones que recibimos y proteger el sitio (artículo 6.1.b y 6.1.f del RGPD).
        </p>
      ),
    },
    {
      id: "destinatarios",
      title: "Con quién compartimos tus datos",
      body: (
        <>
          <p>No vendemos ni rentamos tus datos personales. Sólo podemos compartirlos con:</p>
          <ul>
            <li>
              Empresas de Grupo STF en Honduras, México y España, cuando sea necesario para atender tu solicitud,
              bajo las mismas prácticas de privacidad descritas aquí.
            </li>
            <li>
              Proveedores tecnológicos que alojan el sitio y su base de datos (Vercel Inc. y Supabase Inc.) y que
              nos envían por correo electrónico los mensajes que recibimos (Resend Inc.), que actúan por nuestra
              cuenta y siguiendo nuestras instrucciones.
            </li>
            <li>Autoridades competentes, cuando la ley lo exija.</li>
          </ul>
        </>
      ),
    },
    {
      id: "transferencias",
      title: "Transferencias internacionales",
      body: (
        <p>
          Nuestros proveedores pueden almacenar o procesar datos en servidores ubicados fuera de tu país, incluidos
          los Estados Unidos. Cuando los datos provienen del Espacio Económico Europeo, estas transferencias se
          realizan con garantías adecuadas, como las cláusulas contractuales tipo aprobadas por la Comisión
          Europea.
        </p>
      ),
    },
    {
      id: "conservacion",
      title: "Conservación de los datos",
      body: (
        <p>
          Conservamos los datos de contacto durante el tiempo necesario para atender tu solicitud y hasta 24 meses
          después de nuestra última comunicación
          {careers && "; los de postulaciones, hasta 12 meses después del cierre del proceso de selección"}, salvo
          que la ley exija un plazo mayor. Después, los eliminamos o anonimizamos.
        </p>
      ),
    },
    {
      id: "derechos",
      title: "Tus derechos",
      body: (
        <>
          <p>
            Puedes acceder a tus datos, rectificarlos, cancelarlos o suprimirlos y oponerte a su tratamiento
            (derechos ARCO) y, cuando aplique, solicitar la limitación del tratamiento, la portabilidad de tus
            datos o revocar tu consentimiento, así como limitar su uso o divulgación.
          </p>
          <p>
            Para ejercerlos, escribe a {mail} con el asunto «Derechos de privacidad» e incluye: tu nombre completo,
            un medio para responderte, la descripción clara del derecho que quieres ejercer y de los datos
            involucrados, y un documento que acredite tu identidad (o la de tu representante). Responderemos en los
            plazos que establezca la legislación aplicable (por ejemplo, 20 días hábiles en México o un mes en la
            Unión Europea).
          </p>
          <p>
            Si consideras que tus derechos no han sido atendidos, puedes acudir a la autoridad de protección de
            datos competente; en España, la Agencia Española de Protección de Datos (
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              www.aepd.es
            </a>
            ).
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "Cookies y tecnologías similares",
      body: (
        <p>
          Este sitio no utiliza cookies de publicidad, de analítica ni de seguimiento; sólo emplea los recursos
          técnicos necesarios para mostrarse. La fotografía principal se carga desde un proveedor externo de
          imágenes (Unsplash), que puede recibir datos técnicos como tu dirección IP al mostrarla.
        </p>
      ),
    },
    {
      id: "seguridad",
      title: "Seguridad",
      body: (
        <p>
          Aplicamos medidas administrativas, técnicas y físicas razonables para proteger tus datos, entre ellas
          conexiones cifradas (HTTPS) y acceso a la base de datos restringido al personal autorizado.
        </p>
      ),
    },
    {
      id: "menores",
      title: "Menores de edad",
      body: <p>Este sitio no está dirigido a menores de 18 años. Si eres menor de edad, no nos envíes datos personales.</p>,
    },
    {
      id: "cambios",
      title: "Cambios a este aviso",
      body: (
        <p>
          Podemos actualizar este aviso para reflejar cambios legales u operativos. La versión vigente estará
          siempre disponible en esta página con su fecha de última actualización.
        </p>
      ),
    },
  ];
}
