/*
 Procesador básico de Markdown a HTML
 Convierte sintaxis común de markdown (.md) a HTML
 */
export class MarkdownProcessor {
  static process(markdown: string): string {
    if (!markdown) return '';

    let html = markdown;

    // Primero procesa los code blocks para proteger el código
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${this.escapeHtml(code.trim())}</code></pre>`;
    });

    // Procesa los headers de más específico a menos específico
    // Excluye el contenido dentro de bloques <pre><code>
    html = this.processHeadersExcludingCodeBlocks(html);

    // Blockquotes
    html = html.replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>');

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr>');
    html = html.replace(/^\*\*\*$/gim, '<hr>');

    // Procesa las listas desordenadas solo si no están dentro de code blocks
    html = html.replace(/^[\*\+\-] (.+)$/gim, '<li>$1</li>');
    
    // Procesa las listas ordenadas
    html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');

    // Envuelve los elementos de lista consecutivos en ul
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      // Verifica que no esté dentro de un pre
      if (match.includes('<pre>') || match.includes('</pre>')) {
        return match;
      }
      return '<ul>' + match + '</ul>';
    });

    // Procesa el código inline después de procesar los code blocks
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

    // Procesa el bold y italic después del código, excluyendo los code blocks
    html = this.processBoldItalicExcludingCodeBlocks(html);

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

    // Procesa los tags de ejemplo: <example name="example-name"></example>
    // Los reemplaza con un placeholder que será procesado después
    html = html.replace(/<example name="([^"]+)"><\/example>/g, (match, name) => {
      return `<div class="example-placeholder" data-example-name="${name}"></div>`;
    });

    // Procesa los párrafos (líneas que no son otros elementos)
    // Excluye el contenido dentro de bloques <pre><code>
    html = this.processParagraphsExcludingCodeBlocks(html);

    // Limpia los párrafos vacíos y las líneas vacías múltiples
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/\n{3,}/g, '\n\n');

    return html.trim();
  }

  private static processHeadersExcludingCodeBlocks(text: string): string {
    // Divide por bloques de código para procesar headers solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesa los headers en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processHeadersInText(beforeCode));
      // Mantiene el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesa los headers en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processHeadersInText(afterCode));
    
    return parts.join('');
  }

  private static processHeadersInText(text: string): string {
    let result = text;
    // Procesa los headers de más específico a menos específico
    result = result.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
    result = result.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    result = result.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    result = result.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    return result;
  }

  private static processParagraphsExcludingCodeBlocks(text: string): string {
    // Divide por bloques de código para procesar párrafos solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesa los párrafos en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processParagraphsInText(beforeCode));
      // Mantiene el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesa los párrafos en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processParagraphsInText(afterCode));
    
    return parts.join('');
  }

  private static processParagraphsInText(text: string): string {
    const lines = text.split('\n');
    return lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      
      // No procesa si ya es un elemento HTML
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
    // Divide por bloques de código para procesar bold/italic solo fuera de ellos
    const parts: string[] = [];
    let lastIndex = 0;
    const codeBlockRegex = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>/g;
    let match;
    
    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Procesa el bold/italic en la parte antes del code block
      const beforeCode = text.substring(lastIndex, match.index);
      parts.push(this.processBoldItalicInText(beforeCode));
      // Mantiene el code block sin cambios
      parts.push(match[0]);
      lastIndex = match.index + match[0].length;
    }
    
    // Procesa el bold/italic en la parte final
    const afterCode = text.substring(lastIndex);
    parts.push(this.processBoldItalicInText(afterCode));
    
    return parts.join('');
  }

  private static processBoldItalicInText(text: string): string {
    let result = text;
    // Procesa el bold y italic (procesa el bold antes del italic para evitar conflictos)
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__(.+?)__/g, '<strong>$1</strong>');
    result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
    result = result.replace(/_(.+?)_/g, '<em>$1</em>');
    return result;
  }

  private static escapeHtml(text: string): string {
    // Escapa el HTML manualmente para compatibilidad con SSR
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
