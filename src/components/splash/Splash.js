import "./Splash.css";

class Splash extends Component {
    constructor(){
        super();
    }
}
        render(){
            return(
                <div className="bodydiv">
                    <div className="titlediv">
                        <img className="logo" alt="logo"
                        src={"NewLogo.png"}/>

                        <p>Don't do you..Do Nu.</p>

                    </div>
                    <div className="buttondiv">
                        <SplashbuttonOne />
                        <SplashbuttonTwo />
                    </div>
                < Background />
                </div>
            )   
        }

        export default Splash;