import { background, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    components: {
      Tabs: {
        variants: {
          verticalNoUnderline: {
            tab: {
              _selected: {
                color: 'blue.500',
                bg: 'gray.100',
                borderBottom: 'none',
              },
              _focus: {
                boxShadow: 'none',
              },
              justifyContent: 'space-between',
              textAlign: 'left',
              background:'blue.200',
              width: '100%',
              border: '1px solid',
              borderColor: 'gray.200',
              margin: '4px',
              borderRadius: 'md',
              padding: '8px',
            },
            tablist: {
              borderBottom: 'none',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
            },
          },
        },
      },
    },
  });
  
  export default customTheme;