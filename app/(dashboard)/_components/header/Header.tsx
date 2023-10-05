import DarkModeToggler from './DarkModeToggler';
import LanguagePicker from './LanguagePicker';
import MyAccount from './MyAccount';
import Notifications from './Notifications';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header
      className="flex items-center justify-between ml-64 px-6 bg-white h-16 shadow-lg"
    >
      <div>
        <SearchBar />
      </div>

      <div className="flex items-center">
        <LanguagePicker className="mr-5" />
        <DarkModeToggler className="mr-3" />
        <Notifications className="mr-5" />
        <MyAccount />
      </div>
    </header>
  );
}

export default Header;