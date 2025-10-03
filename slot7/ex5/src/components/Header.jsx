const Header = () => {
  return (
    <header className="header">
        <div className="top-bar">
          <img
            src="https://th.bing.com/th/id/OIP.H7B2zQa6tyItU1JR6pPcngHaEE?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="FPT University Logo"
          className="logo"
          />
          <div className="top-text">Hệ thống Điểm danh | Đăng xuất</div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
          </div>
        </div>
      </header>
        );
};

export default Header;