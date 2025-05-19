import React,{useState,useEffect} from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage';
import '../index.css';



function App() 
{
  // const [html,setHtml] = useState('');
  // const [css,setCss] = useState('');
  // const [js,setJs] = useState('');

  const [sourceDoc,setSourceDoc]=useState('');
  const [html,setHtml] = useLocalStorage('html','');
  const [css,setCss] = useLocalStorage('css','');
  const [js,setJs] = useLocalStorage('js','');



  
  useEffect( ()=>{
    const timeOut= setTimeout( ()=>{
      setSourceDoc(
         `<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
    `)
    },500)
    return ()=>clearTimeout(timeOut)
  },[html,css,js]);

  // backtics are important 


  return (
    <>
    {/* top pane */}
      <div className='pane'>
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
        <Editor language="javascript" displayName="Javascript" value={js} onChange={setJs}/>
        
      </div>

    {/* bottom pane */}
      <div >
        <iframe
          srcDoc={sourceDoc}
          className='pane'
          title='output'
          sandbox='allow-scripts'
          width="100%"
          height="100%" 
          />

      </div>
    </>
  
  );
}

export default App;