import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/salvador.americo.39/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>



          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/salvador-am%C3%A9rico-afo-832723271/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/5Salvador'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
              </section>
              <div className='row justify-content-center'>
                  <div className='col-sm-3'>
                      <p>Get in touch</p>
                  </div>
                  <div className='col-sm-3'>
                      <p>Contact: +9624438565</p>
                  </div>
                  <div className='col-sm-3'>
                      <p>Email: salvadoramerico16@gmail.com</p>
                  </div>
                  <div className='col-sm-3'>
                      <p>Developed by Salvador</p>
                  </div>
              </div>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href=''>
          Salvador Américo Afo
        </a>
      </div>
    </MDBFooter>
  );
}