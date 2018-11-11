import * as React from 'react';

// See https://stackoverflow.com/questions/42847126/script-load-in-react
function loadScript(src: string) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function() {
      resolve();
    });
    script.addEventListener('error', function(e) {
      reject(e);
    });
    document.body.appendChild(script);
  });
}

interface Props {
  url: string;
  children(props: State): JSX.Element | null;
}

interface State {
  loading: boolean;
}

export class ReactLoadScript extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.loadScript();
  }

  loadScript = async () => {
    this.setState({ loading: true });
    try {
      // Check script not already loaded
      const loadedScripts = [
        ...(document.getElementsByTagName('script') as any),
      ];
      const isLoaded = loadedScripts.find(
        ({ src }: { src: string }) => src === this.props.url
      );
      if (!isLoaded) {
        await loadScript(this.props.url);
      }
      this.setState({ loading: false });
    } catch (error) {
      // TODO handle error
      this.setState({ loading: false });
    }
  };

  render() {
    return this.props.children(this.state);
  }
}
