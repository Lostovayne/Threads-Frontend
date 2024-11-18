const url =
  "https://us-east-1.data.tidbcloud.com/api/v1beta/app/dataapp-hGLzdvUL/endpoint/posts";

const endpoint = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa(`${process.env.NEXT_PUBLIC_API_KEY}:${process.env.NEXT_PUBLIC_PRIVATE_API_KEY}`)}`, // Autenticación básica
      },
    });

    if (!response.ok) {
      console.error("Error en la respuesta:", response.statusText);
      return null; // O maneja el error de otra manera
    }

    const { data } = await response.json();
    return data.rows;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
};

endpoint();
