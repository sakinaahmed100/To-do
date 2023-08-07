import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body,* {
    margin: 0;
    box-sizing: border-box;
    /* padding: 0 !important; */
  }
  body{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXLw+PjVHM0AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover; 

  }
`

export {GlobalStyle}