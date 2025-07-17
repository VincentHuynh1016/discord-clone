const AuthLayout = ({children} : {children: React.ReactNode}) => {
    return ( 
        <div className="bg-red-500 min-h-screen"> {children} </div>
     );
}
 
export default AuthLayout;