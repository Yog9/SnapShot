export const commonModalStyles = (width = '400px', height = '270px') => {
    return {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: '200',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          },
          content: {
            position: 'absolute',
            top: '100px',
            left: '100px',
            right: '100px',
            bottom: '100px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
    }
}