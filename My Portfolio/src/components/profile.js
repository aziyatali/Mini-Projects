import {Component} from 'react';
import Me from '/home/aziyatali/Desktop/Mini-Projects/My Portfolio/src/components/images/me.png';
export default class Profile extends Component{
    render(){
        return(
            <div className="box">
                <div className="profile-sec">
                    <img className="vhs-filter__r vhs-filter__g vhs-filter__b profile-img" src={Me} alt="super cool guy"></img>
                    <div className="profile-info">
                        <h2>Aziyat MURZAMIDINOV</h2>
                        <ul><u>Education:</u><br/>
                        UNIST, South Korea
                        </ul><br/>
                        <ul><u>Homeland:</u><br/>
                            Kyrgyzstan, Osh
                        </ul><br/>
                        <ul><u>Age:</u><br/>
                            21
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}