import * as React from 'react';
import AsyncSelect from 'react-select/lib/Async';

interface Props {
  value: string;
  onChange: (googleResult: any) => void;
  onInputChange: (address: string) => void;
  className?: string;
  searchOptions?: any;
}

// TODO create separate package for this one
export class ReactSelectGoogleAutocomplete extends React.Component<Props, {}> {
  private autocompleteService: any;

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.autocompleteService = new (window as any).google.maps.places.AutocompleteService();
  };

  loadOptions = (inputValue: string, callback: any) => {
    if (this.autocompleteService && inputValue) {
      this.autocompleteService.getPlacePredictions(
        {
          ...this.props.searchOptions,
          input: inputValue,
        },
        (data: any, status: string) => {
          if (
            status ===
            (window as any).google.maps.places.PlacesServiceStatus.ZERO_RESULTS
          ) {
            return callback();
          }
          // TODO handle error
          data.map((result: any) => {
            result.label = result.description;
            result.value = result.description;
          });
          callback(data);
        }
      );
    } else {
      callback();
    }
  };

  handleInputChange = (newValue: string) => {
    this.props.onInputChange(newValue);
  };

  render() {
    const { className, value, onChange } = this.props;

    return (
      <AsyncSelect
        cacheOptions
        loadOptions={this.loadOptions}
        defaultOptions
        inputValue={value}
        onInputChange={this.handleInputChange}
        onChange={onChange}
        className={className}
      />
    );
  }
}
