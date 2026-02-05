/*
 Procesador básico de Markdown a HTML
 Convierte sintaxis común de markdown (.md) a HTML
 */
export class MarkdownProcessor {
  static process(markdown: string): string {
    if (!markdown) return '';

    let html = markdown;

    // Primero procesar code blocks (para proteger el código)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${this.escapeHtml(code.trim())}</code></pre>`;
    });

    // Headers (procesar de más específico a menos específico)
    // Excluir contenido dentro de <pre><code> blocks
    html = this.processHeadersExcludingCodeBlocks(html);

    // Blockquotes
    html = html.replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>');

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    html = html.replace(/^\*\*\*$/gim, '<hr>');

    // Lists (unordered) - solo si no están dentro de code blocks
    html = html.replace(/^[\*\+\-] (.+)$/gim, '<li>$1</li>');
    
    // Lists (ordered)
    html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');

    // Wrap consecutive list items in ul
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      // Verificar que no esté dentro de un pre
      if (match.includes('<pre>') || match.includes('</pre>')) {
        return match;
      }
      return '<ul>' + match + '</ul>';
    });

    // Inline code (después de procesar code blocks)
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

    // Bold y Italic (procesar después de code, excluyendo code blocks)
    html = this.processBoldItalicExcludingCodeBlocks(html);

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

    // Procesar tags de ejemplo: <example name="example-name"></example>
    // Los reemplazamos con un placeholder que será procesado después
    html = html.replace(/<example name="([^"]+)"><\/example>/g, (match, name) => {
      return `<div class="example-placeholder" data-example-name="${name}"></div>`;
    });

    // Paragraphs (líneas que no son otros elementos)
    // Excluir contenido dentro de <pre><code> blocks
    html = this.processParagraphsExcludingCodeBlocks(html);

    // Clean up empty paragraphs y líneas vacías múltiples
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/\n{3,}/g, '\n\n');

    return html.trim();
  }

  private static processHeadersExcludingCodeBlocks(text: string): string {
    // Dividir por bloques de código para procesar headers solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesar headers en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processHeadersInText(beforeCode));
      // Mantener el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesar headers en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processHeadersInText(afterCode));
    
    return parts.join('');
  }

  private static processHeadersInText(text: string): string {
    let result = text;
    // Procesar headers de más específico a menos específico
    result = result.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    result = result.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    result = result.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    result = result.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    return result;
  }

  private static processParagraphsExcludingCodeBlocks(text: string): string {
    // Dividir por bloques de código para procesar párrafos solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesar párrafos en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processParagraphsInText(beforeCode));
      // Mantener el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesar párrafos en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processParagraphsInText(afterCode));
    
    return parts.join('');
  }

  private static processParagraphsInText(text: string): string {
    const lines = text.split('\n');
    return lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      
      // No procesar si ya es un elemento HTML
      if (trimmed.startsWith('<h') || 
          trimmed.startsWith('</h') ||
          trimmed.startsWith('<ul') || 
          trimmed.startsWith('</ul') ||
          trimmed.startsWith('<li') ||
          trimmed.startsWith('</li') ||
          trimmed.startsWith('<pre') ||
          trimmed.startsWith('</pre') ||
          trimmed.startsWith('<code') ||
          trimmed.startsWith('</code') ||
          trimmed.startsWith('<blockquote') ||
          trimmed.startsWith('</blockquote') ||
          trimmed.startsWith('<hr') ||
          trimmed.startsWith('<p') ||
          trimmed.startsWith('</p')) {
        return line;
      }
      
      return `<p>${line}</p>`;
    }).join('\n');
  }

  private static processBoldItalicExcludingCodeBlocks(text: string): string {
    // Dividir por bloques de código para procesar bold/italic solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesar bold/italic en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processBoldItalicInText(beforeCode));
      // Mantener el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesar bold/italic en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processBoldItalicInText(afterCode));
    
    return parts.join('');
  }

  private static processBoldItalicInText(text: string): string {
    let result = text;
    // Procesar bold y italic (procesar bold antes de italic para evitar conflictos)
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__(.+?)__/g, '<strong>$1</strong>');
    result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
    result = result.replace(/_(.+?)_/g, '<em>$1</em>');
    return result;
  }

  private static escapeHtml(text: string): string {
    // Escape HTML manualmente para compatibilidad con SSR
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
