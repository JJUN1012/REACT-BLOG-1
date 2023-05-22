import './App.css';

function Header(){
  return(
    <nav>
      <div class="navigate_logo">JJUN's BLOG</div>
      <ul class="navigate_menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Body(){
  return(
    <div class="body_container">
      <div class="body_contents">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus mi turpis, at tincidunt tellus placerat dapibus. Nunc sit amet orci auctor, lobortis massa sed, condimentum enim. Ut vel accumsan leo, id tincidunt quam. Donec bibendum sed sapien a porta. Morbi mattis sit amet est at rutrum. Ut egestas massa vel metus commodo faucibus. Pellentesque lacinia fringilla augue, sit amet pulvinar sapien congue nec. Nullam tortor odio, suscipit nec tortor vel, accumsan varius lectus. Pellentesque porttitor a arcu quis lobortis. Vivamus molestie lectus risus, ut eleifend risus blandit aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut dui mi. Aenean mattis aliquam arcu vitae mattis.

        Nam tincidunt ante neque, id iaculis lorem sagittis ut. Vestibulum eget facilisis erat. Quisque eget quam sed orci imperdiet maximus in id urna. Pellentesque mollis velit sed sapien eleifend pretium. Curabitur sit amet porttitor ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut bibendum risus a ante vulputate, et commodo erat pellentesque. Vivamus viverra erat in magna egestas, euismod porta nisi mollis. Nullam neque diam, tincidunt volutpat posuere et, tristique et ex. Phasellus congue felis non risus pellentesque, in molestie lorem sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

        Sed a risus id ligula accumsan dignissim sed eget urna. Quisque mauris metus, congue sit amet facilisis vitae, tincidunt sed lorem. Sed eu aliquet est, at consequat massa. Fusce molestie sodales orci, nec sodales ex scelerisque eu. Nullam congue, urna non interdum rutrum, sem sapien placerat ipsum, quis ultrices lacus sapien a diam. Morbi eu eros vel sapien tempus convallis. Cras ullamcorper vitae dui nec venenatis. Praesent vel lorem libero. Aenean ullamcorper eros ut viverra rhoncus.

        Duis nec egestas justo. Nullam dictum est at ipsum rutrum tempor. Sed id felis vestibulum leo feugiat fringilla eu at tortor. Integer interdum ligula eget orci iaculis, eu sodales magna hendrerit. In bibendum scelerisque sem, ut venenatis tortor feugiat a. Vestibulum at mattis leo. Proin et lobortis dolor. Sed rhoncus felis in tellus condimentum condimentum. In at justo rhoncus, iaculis dolor ac, posuere orci. Morbi eu leo ut massa tempus vehicula nec nec ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

        Duis semper hendrerit ante. Aliquam nec diam consequat libero lobortis sagittis. Mauris ullamcorper sapien eget nisi consequat, vitae suscipit tortor feugiat. In congue lobortis sapien, in elementum sapien consectetur eu. Donec finibus consequat nulla in iaculis. Nulla dapibus odio a consectetur commodo. Fusce at sagittis ipsum, in ornare leo. Donec a enim quis ligula faucibus cursus sit amet vitae ipsum. Pellentesque volutpat pharetra nunc quis ornare. Quisque non felis eu metus vehicula sollicitudin at suscipit sem.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus mi turpis, at tincidunt tellus placerat dapibus. Nunc sit amet orci auctor, lobortis massa sed, condimentum enim. Ut vel accumsan leo, id tincidunt quam. Donec bibendum sed sapien a porta. Morbi mattis sit amet est at rutrum. Ut egestas massa vel metus commodo faucibus. Pellentesque lacinia fringilla augue, sit amet pulvinar sapien congue nec. Nullam tortor odio, suscipit nec tortor vel, accumsan varius lectus. Pellentesque porttitor a arcu quis lobortis. Vivamus molestie lectus risus, ut eleifend risus blandit aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut dui mi. Aenean mattis aliquam arcu vitae mattis.

        Nam tincidunt ante neque, id iaculis lorem sagittis ut. Vestibulum eget facilisis erat. Quisque eget quam sed orci imperdiet maximus in id urna. Pellentesque mollis velit sed sapien eleifend pretium. Curabitur sit amet porttitor ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut bibendum risus a ante vulputate, et commodo erat pellentesque. Vivamus viverra erat in magna egestas, euismod porta nisi mollis. Nullam neque diam, tincidunt volutpat posuere et, tristique et ex. Phasellus congue felis non risus pellentesque, in molestie lorem sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

        Sed a risus id ligula accumsan dignissim sed eget urna. Quisque mauris metus, congue sit amet facilisis vitae, tincidunt sed lorem. Sed eu aliquet est, at consequat massa. Fusce molestie sodales orci, nec sodales ex scelerisque eu. Nullam congue, urna non interdum rutrum, sem sapien placerat ipsum, quis ultrices lacus sapien a diam. Morbi eu eros vel sapien tempus convallis. Cras ullamcorper vitae dui nec venenatis. Praesent vel lorem libero. Aenean ullamcorper eros ut viverra rhoncus.

        Duis nec egestas justo. Nullam dictum est at ipsum rutrum tempor. Sed id felis vestibulum leo feugiat fringilla eu at tortor. Integer interdum ligula eget orci iaculis, eu sodales magna hendrerit. In bibendum scelerisque sem, ut venenatis tortor feugiat a. Vestibulum at mattis leo. Proin et lobortis dolor. Sed rhoncus felis in tellus condimentum condimentum. In at justo rhoncus, iaculis dolor ac, posuere orci. Morbi eu leo ut massa tempus vehicula nec nec ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

        Duis semper hendrerit ante. Aliquam nec diam consequat libero lobortis sagittis. Mauris ullamcorper sapien eget nisi consequat, vitae suscipit tortor feugiat. In congue lobortis sapien, in elementum sapien consectetur eu. Donec finibus consequat nulla in iaculis. Nulla dapibus odio a consectetur commodo. Fusce at sagittis ipsum, in ornare leo. Donec a enim quis ligula faucibus cursus sit amet vitae ipsum. Pellentesque volutpat pharetra nunc quis ornare. Quisque non felis eu metus vehicula sollicitudin at suscipit sem.
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div class="app"> 
      <Header />
      <Body />
    </div>
  );
}

export default App;
