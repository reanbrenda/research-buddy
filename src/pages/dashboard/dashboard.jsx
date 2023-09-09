import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Dashboard() {
  const d = new Date()
    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()
    const hour = d.getHours();
  return (
    <div className="home">
        <br/>  <br/>
        
      <div className="BannerInfo" style={{textAlign: 'center'}}>
        <p style={{fontSize: '34px', color: 'black'}}>{day}, {month} {date}</p>
       <h5 style={{fontSize: '40px', color: '#008dc9'}}> {hour>=12 ? hour>=16 ? <>Good Evening</> : <> Good Afternoon</> : <> Good Morning</>}, Brenda</h5>
       
      </div>
      <br/>  <br/>  <br/>
      <FeaturedInfo />

      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
