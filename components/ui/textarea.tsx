
import React from 'react';



export const Textarea = React.forwardRef<

  HTMLTextAreaElement,

  React.TextareaHTMLAttributes<HTMLTextAreaElement>

>((props, ref) => {

  return (

    <textarea

      ref={ref}

      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"

      {...props}

    />

  );

});



Textarea.displayName = 'Textarea';
