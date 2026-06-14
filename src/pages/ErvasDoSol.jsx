export default function Quinta() {
  return (
    <div
      style={{
        background: "#F7F1E7",
        minHeight: "100vh",
        paddingBottom: 80,
      }}
    >

      <img
        src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1600&q=80"
        style={{
          width: "100%",
          height: 420,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "auto",
          padding: 40,
        }}
      >

        <h1
          style={{
            fontSize: 56,
            color: "#59683D"
          }}
        >
          🪻 Ervas do Sol
        </h1>

        <p
          style={{
            color:"#7B5B3E",
            fontSize:20
          }}
        >
          📍 Leiria
        </p>

        <p
          style={{
            fontSize:22,
            lineHeight:1.7,
            maxWidth:700
          }}
        >
          Pequena quinta familiar.

          Cultivamos lavanda,
          mel e ervas aromáticas
          com amor e respeito pela natureza.
        </p>

        <div style={{marginTop:30}}>

          <button
            style={{
              background:"#59683D",
              color:"white",
              border:"none",
              padding:"16px 24px",
              borderRadius:40,
              marginRight:15
            }}
          >
            ❤️ Seguir quinta
          </button>

          <button
            style={{
              background:"white",
              border:"1px solid #ddd",
              padding:"16px 24px",
              borderRadius:40
            }}
          >
            ✉️ Mensagem
          </button>

        </div>

      </div>

    </div>
  )
}