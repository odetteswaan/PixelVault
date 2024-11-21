import {
  Box,
  TextField,
  Typography,
  styled,
  List,
  ListItem,
} from '@mui/material';
import { colors } from 'src/themes/colors';
import { customTheme } from 'src/themes/theme';
import { useState } from 'react';

const StyledBox = styled(Box)(
  ({ hasSuggestions }: { hasSuggestions: boolean }) => ({
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hasSuggestions ? '5px 0 0 0' : '5px 0 0 5px',
    height: '40px',
    background: colors.primary.grayishWhite,
    border: `1px solid ${colors.greys.lightGrey}`,
    borderRight: 'none',
  })
);

const StyledText = styled(Typography)(() => ({
  fontWeight: customTheme.typography.fontWeights.medium,
  fontFamily: customTheme.typography.fontFamily.main,
  fontSize: '14px',
  color: '#8A96A8',
  background: colors.primary.grayishWhite,
}));

const StyledTextField = styled(TextField)(
  ({ hasSuggestions }: { hasSuggestions: boolean }) => ({
    '& .MuiOutlinedInput-root': {
      borderRadius: hasSuggestions ? '0 5px 0 0' : '0 5px 5px 0',
      height: '40px',
      '& fieldset': {
        borderColor: colors.greys.lightGrey,
        borderWidth: '1px',
      },
      '& input': {
        padding: '6px 10px',
        background: colors.primary.grayishWhite,
        height: '100%',
      },
      '&:hover fieldset': {
        borderColor: colors.greys.lightGrey,
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.greys.lightGrey,
        borderWidth: '1px',
      },
    },
  })
);

const SuggestionsContainer = styled(Box)(() => ({
  position: 'absolute',
  width: '100%',
  backgroundColor: 'white',
  border: `1px solid ${colors.greys.lightGrey}`,
  background: colors.primary.grayishWhite,
  borderRadius: '0 0 4px 4px',
  zIndex: 1,
  maxHeight: '280px',
  overflowY: 'auto',
  top: '40px',
  borderTop: 'none',
}));

const SuggestionText = styled(Typography)({
  fontWeight: customTheme.typography.fontWeights.medium,
  fontSize: customTheme.typography.fontSizes[10],
  fontFamily: customTheme.typography.fontFamily.main,
  color: colors.greys.slatGrey,
});

function Search() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const sampleSuggestions = [
    'Samsung',
    'Apple',
    'Sony',
    'Nokia',
    'Microsoft',
    'Google',
    'Samsung Galaxy',
    'Samsung Note',
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value) {
      const filteredSuggestions = sampleSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    setSuggestions([]);
  };

  return (
    <Box display="flex" alignItems="center" position="relative">
      <StyledBox hasSuggestions={suggestions.length > 0}>
        <StyledText>All</StyledText>
      </StyledBox>
      <StyledTextField
        hasSuggestions={suggestions.length > 0}
        placeholder="search..."
        variant="outlined"
        value={searchValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <SuggestionsContainer>
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <SuggestionText>{suggestion}</SuggestionText>
              </ListItem>
            ))}
          </List>
        </SuggestionsContainer>
      )}
    </Box>
  );
}

export default Search;
