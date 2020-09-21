import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function formatDate(unformatedDate) {
  return format(parseISO(unformatedDate), 'dd/MM/yyyy HH:mm', {
    locale: ptBR,
  });
}
