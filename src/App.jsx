import Select from "react-select"
import makeAnimated from 'react-select/animated';
import Slider from "react-slick";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const animatedComponents = makeAnimated();
const App=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
    return(
        <div>
            {/* Slick */}
            <div>
            <Select options={options} onChange={(x)=>console.log(x)}/>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[options[1], options[0]]}
                isMulti
                options={options} onChange={(x)=>console.log(x)}/>
            </div>
            <Slider {...settings}>
                <div >
                    <h3 style={{"backgroundColor":"red"}}>1</h3>
                </div>
                <div>
                    <h3 style={{"backgroundColor":"orange"}}>2</h3>
                </div>
                <div>
                    <h3 style={{"backgroundColor":"green"}}>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
            
        </div>
    )
}
export default App