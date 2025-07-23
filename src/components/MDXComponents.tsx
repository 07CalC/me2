
import type { MDXComponents as MDXComponentType } from 'mdx/types';
import { CopyButton } from './CopyButton';
import BlogFooter from '../../content/BlogFooter';

export const MDXComponents: MDXComponentType = {
  h1: (props) => {
    return (
      <h1
        className="text-4xl font-bold font-mono text-start text-purple-500 my-6"
        {...props}
      />
    )
  },
  h2: (props) => (
    <h2
      {...props}
      className="text-3xl font-semibold font-mono text-start text-accent2 my-5 text-purple-300"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="text-2xl font-semibold font-mono text-start text-accent2 my-4 text-purple-200"
    />
  ),
  p: (props) => (
    <p {...props} className="text-xl font-mono text-start my-2 text-text" />
  ),
  H: (props) => (
    <span {...props} className="text-lg font-mono text-start my-2 text-purple-500" />
  ),
  ul: (props) => (
    <ul {...props} className="list-disc pl-6 text-lg font-mono text-start my-2" />
  ),
  ol: (props) => (
    <ol {...props} className="list-decimal pl-6 text-lg font-mono text-start my-2" />
  ),
  li: (props) => (
    <li {...props} className="text-lg font-mono text-start" />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-accent/50 pl-4 italic text-sm font-mono text-start my-4"
    />
  ),
  code: (props) => {
    if (!props.className?.includes('language-')) {
      return (
        <code
          {...props}
          className="bg-gray-800 px-1 py-0.5 rounded text-sm font-mono"
        />
      );
    }
    return (
      <div className="relative my-6 group">
        <code
          {...props}
          className={`block p-4 bg-gray-800 text-sm sm:text-base ${props.className || ''}`}
        />

        <CopyButton
          text={props.children}
          className="absolute top-0 right-3 opacity-0 group-hover:opacity-100 
                 transition-opacity bg-gray-700/80 hover:bg-gray-600/80 
                 p-1.5 rounded text-xs"
        />
      </div>
    );
  },
  pre: (props) => (
    <pre
      {...props}
      className="bg-bg text-white max-w-[80vw] rounded-lg overflow-x-auto text-sm md:text-base"
    />
  ),
  a: (props) => (
    <a
      {...props}
      className="text-blue-500 transition-colors underline"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  img: (props) => (
    <div className="flex flex-col items-center w-full my-6">
      <img
        alt={props.alt}
        src={props.src}
        className="rounded-lg max-w-full h-auto"
      />
      {props.alt && (
        <p className="text-sm text-muted-foreground mt-2 text-center font-mono">
          {props.alt}
        </p>
      )}
    </div>
  ),
  BlogFooter: () => (
    <BlogFooter />
  )
};
