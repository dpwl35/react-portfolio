import { useNavigate, useLocation} from 'react-router-dom';

function Nav(){
  const navigate = useNavigate();
  const menuItem = [
    {
      idx : '0',
      name: 'Portfolio',
      path: '/',
    },
    {
      idx : '1',
      name: 'about',
      path: '/about',
    },
    {
      idx : '2',
      name: 'projects',
      path: '/projects',
    },
    {
      idx : '3',
      name: 'contact',
      path: '/contact',
    },
  ]

  const setTheme = (name) => {
    document.documentElement.setAttribute('data-theme', name);
  };

  const dataTheme = document.documentElement  
  const location = useLocation();
  const pathName = location.pathname.replace('/', '');

  // console.log(dataTheme.dataset)
  // console.log(pathName)

  dataTheme.dataset.theme = pathName

  return(    
    <div className='nav'>
      <div className='nav-left'>
        <ul className='menu'>
          {
            menuItem.map(({name, path})=>{
            return (
              <li className={ pathName === name ? name + ' active' :  name}
                  onClick={() => { 
                  navigate(path); 
                  setTheme(name); }} key={path}>
                <div>{name}</div>
              </li>
            )
            })
          }
        </ul>
      </div>
      <div className='nav-right'>
        <a href='https://github.com/dpwl35' target='_blank' rel="noopener noreferrer" title="새창으로 열기 깃허브">Github</a>
        <a href='https://ji35.tistory.com/' target='_blank' rel="noopener noreferrer" title="새창으로 열기 블로그">Blog</a>
      </div>
    </div> 
  )
}

export default Nav;