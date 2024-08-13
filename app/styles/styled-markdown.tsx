interface StyledMarkdownProps {
  children: React.ReactNode;
}

export default function StyledMarkdown({ children }: StyledMarkdownProps) {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 first:prose-h2:mt-0 prose-h3:text-xl prose-h3:mt-8 first:prose-h3:mt-0 prose-h4:text-lg prose-h4:mt-6 first:prose-h4:mt-0 prose-a:text-blue-600 hover:prose-a:bg-blue-600 hover:prose-a:text-white prose-p:overflow-x-auto prose-p:break-words prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-img:mx-auto prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-table:border-collapse prose-th:border-b-2 prose-th:border-gray-300 dark:prose-th:border-gray-700 prose-td:border-t prose-td:border-gray-200 dark:prose-td:border-gray-800 prose-li:mb-1 w-full max-w-none text-gray-900 md:w-[600px] dark:text-gray-900">
      {children}
    </div>
  );
}
