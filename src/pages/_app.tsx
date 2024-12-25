import 'simplebar-react/dist/simplebar.min.css';
import 'src/assets/styles/tailwind.css';
import { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { SettingsConsumer, SettingsProvider } from 'src/contexts/settings';
import { useNprogress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import { TON_CONFIG } from 'src/config/tonConfig';
import DefaultLayout from 'src/layouts';
import { QueryProvider } from 'src/providers/queryProvider';
import 'src/locales/i18n';

const clientSideEmotionCache = createEmotionCache();
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface CustomAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const CustomApp = (props: CustomAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getDefaultLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
  useNprogress();
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ? Component.getLayout : getDefaultLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Telegrex</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <QueryProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <SettingsConsumer>
              {(settings) => {
                const theme = createTheme({
                  colorPreset: settings.colorPreset,
                  contrast: settings.contrast,
                  direction: settings.direction,
                  paletteMode: settings.paletteMode,
                  responsiveFontSizes: settings.responsiveFontSizes,
                });

                return (
                  <ThemeProvider theme={theme}>
                    <TonConnectUIProvider
                      manifestUrl={TON_CONFIG.manifestUrl}
                      actionsConfiguration={{
                        twaReturnUrl: `${'https'}://${'t.me/merlinex_bot'}`,
                      }}
                    >
                      <Head>
                        <meta
                          name="color-scheme"
                          content={settings.paletteMode}
                        />
                        <meta
                          name="theme-color"
                          content={theme.palette.neutral[900]}
                        />
                      </Head>
                      <CssBaseline />
                      {getLayout(<Component {...pageProps} />)}
                    </TonConnectUIProvider>
                  </ThemeProvider>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </LocalizationProvider>
      </QueryProvider>
    </CacheProvider>
  );
};

export default CustomApp;
