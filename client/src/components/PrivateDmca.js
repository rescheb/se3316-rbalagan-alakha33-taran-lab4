import React , {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import parse from "html-react-parser"
 
export default function PrivateDmca() {
    const [text,setText] = useState('')
    return(
        <div className="App">
        <div className="editor">
        <div className = "text-center">
          <strong><h1>DMCA Notice</h1></strong>
    <p>Laws known as "copyright exceptions" permit you to use another person's copyright-protected work without their consent, but only in particular situations. Citation, criticism, reviews, caricature, parody, and pastiche are prohibited under Article 17 of the EU Digital Single Market Copyright Directive. In addition to being codified into national laws by each member state and being interpreted by both national courts and the Court of Justice of the European Union, these phrases have their common meaning in daily English (CJEU).</p>
    </div>
    <br></br>
    <CKEditor 
            editor={ClassicEditor}
            data={text} 
            onChange={(event, editor) => {
             
              const data = editor.getData()
              setText(data)
            
            }}
          />
        </div>
        <div>
          <p>{parse(text)}</p>
        </div>
      </div>
      
    )

  

}