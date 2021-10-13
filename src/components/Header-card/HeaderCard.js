import Card from "./Card"

const HeaderCard = () => {
   return (
      <>
      <div className="header-home">
      <div className="header-home-txt">
         <h1>Get the attention <br /> your brand deserves.</h1>
         <p>Get quality design without<br /> the cost & comploxity</p>
      </div>
      <div className="col-1 col">
          <Card img="url(image/product.jpg)" />
          <Card img="url(image/product.jpg)" />
          <Card img="url(image/product.jpg)"  />
       </div >
       <div className="col-2 col">
          <Card img="url(image/product.jpg)"  />
          <Card img="url(image/product.jpg)"  />
          <Card img="url(image/product.jpg)"  />
       </div>
       <div className="col-3 col">
         <Card img="url(image/product.jpg)"  />
         <Card img="url(image/product.jpg)"  />
       </div>
       <div className="col-4 col">
         <Card img="url(image/product.jpg)"  />
         <Card img="url(image/product.jpg)"  />
         <Card img="url(image/product.jpg)"  />
       </div>
       <div className="col-5 col">
          <Card img="url(image/product.jpg)"  />
          <Card img="url(image/product.jpg)"  />
          <Card img="url(image/product.jpg)"  />
       </div>
      </div>
      </>
   )
}

export default HeaderCard
