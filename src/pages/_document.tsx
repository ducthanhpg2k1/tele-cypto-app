import type { ComponentProps, ComponentType, ReactElement } from 'react';
import type { AppType } from 'next/app';
import type { DocumentContext, DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

// Extend Day.js with the relativeTime plugin
import { createEmotionCache } from 'src/utils/create-emotion-cache';

import type { CustomAppProps } from './_app';

interface CustomDocumentProps extends DocumentProps {
  emotionStyleTags: ReactElement[];
}

const CustomDocument = ({ emotionStyleTags }: CustomDocumentProps) => {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='viewport'
          content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi'
        />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon-16x16.png' type='image/png' sizes='16x16' />
        <link rel='icon' href='/favicon-32x32.png' type='image/png' sizes='32x32' />
        <link
          rel='apple-touch-icon.png'
          href='/apple-touch-icon.png'
          type='image/png'
          sizes='180x180'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
          rel='stylesheet'
        />
        <meta name='emotion-insertion-point' content='' />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: ComponentType<ComponentProps<AppType> & CustomAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default CustomDocument;
