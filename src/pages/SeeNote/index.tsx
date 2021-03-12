import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import Note from '../../components/Note';
import './styles.css';

function SeeNote() {
  return (
    <div className="container">
      <header>
        <FiArrowLeft size={24} color="#9768D1" />

        <div className="header-buttons">
          <button className="btn-purple">
            <FiEdit size={16} />
            <span>Editar nota</span>
          </button>

          <button className="btn-red">
            <FiTrash2 size={16} />
            <span>Excluir nota</span>
          </button>
        </div>
      </header>

      <Note
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis elementum nibh tellus molestie. Id nibh tortor id aliquet lectus. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. At varius vel pharetra vel turpis nunc. Viverra adipiscing at in tellus integer. Pretium quam vulputate dignissim suspendisse in. Dui faucibus in ornare quam viverra orci. A lacus vestibulum sed arcu non odio euismod lacinia. Ac tincidunt vitae semper quis lectus. Urna porttitor rhoncus dolor purus non enim. Mauris ultrices eros in cursus turpis massa tincidunt dui. In massa tempor nec feugiat. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam.

        Sit amet porttitor eget dolor morbi non arcu risus quis. At lectus urna duis convallis convallis tellus id. Non nisi est sit amet facilisis magna etiam tempor orci. Lectus nulla at volutpat diam ut. Dui accumsan sit amet nulla facilisi. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Aliquam ut porttitor leo a diam sollicitudin tempor. Sapien et ligula ullamcorper malesuada. Quis varius quam quisque id diam vel quam elementum. Enim nulla aliquet porttitor lacus.
        
        Sed tempus urna et pharetra. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Tincidunt id aliquet risus feugiat in ante. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Cursus mattis molestie a iaculis at erat. Volutpat sed cras ornare arcu dui vivamus arcu. Diam quis enim lobortis scelerisque fermentum dui faucibus. Enim eu turpis egestas pretium aenean. Ornare arcu odio ut sem nulla pharetra diam sit amet. Ut ornare lectus sit amet est placerat in egestas. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Amet nisl suscipit adipiscing bibendum est ultricies. Ipsum dolor sit amet consectetur. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nam libero justo laoreet sit amet cursus sit amet. Lectus magna fringilla urna porttitor. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Facilisi etiam dignissim diam quis enim lobortis.
        
        Odio morbi quis commodo odio aenean. Egestas quis ipsum suspendisse ultrices gravida dictum. Convallis aenean et tortor at risus viverra adipiscing at. Blandit aliquam etiam erat velit scelerisque in dictum. Scelerisque fermentum dui faucibus in ornare quam viverra. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Fermentum odio eu feugiat pretium. Enim neque volutpat ac tincidunt vitae semper quis lectus. In hendrerit gravida rutrum quisque non. Integer feugiat scelerisque varius morbi enim nunc faucibus. Malesuada proin libero nunc consequat. Ut pharetra sit amet aliquam.
        
        Odio tempor orci dapibus ultrices in. Commodo odio aenean sed adipiscing. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sed euismod nisi porta lorem mollis aliquam. Pharetra convallis posuere morbi leo urna molestie. Arcu bibendum at varius vel. Volutpat maecenas volutpat blandit aliquam etiam erat. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ultrices sagittis orci a scelerisque purus semper eget. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tellus molestie nunc non blandit massa enim nec. Urna molestie at elementum eu. At lectus urna duis convallis convallis tellus id. Platea dictumst quisque sagittis purus sit."
      />
    </div>
  );
}

export default SeeNote;