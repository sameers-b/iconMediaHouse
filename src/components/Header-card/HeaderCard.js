import Card from "./Card"

const HeaderCard = () => {
   return (
      <>
       <div className="col-1 col">
          <Card />
       </div >
       <div className="col-2 col">
          <Card />
       </div>
       <div className="col-3 col">
         <Card />
       </div>
       <div className="col-4 col">
         <Card />
       </div>
       <div className="col-5 col">
          <Card />
          {/* <Card /> */}
       </div>
      </>
   )
}

export default HeaderCard
