import { useEffect } from 'react'
import { $authData } from '../../story/authAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

export default function NotLoggedin({children}) {
    const navigate= useNavigate();
    const [auth] = useRecoilState($authData);
    useEffect(()=>{
if(auth.isAuth){
    navigate('/');
}
    },[auth])
  return (
    children
  )
}
