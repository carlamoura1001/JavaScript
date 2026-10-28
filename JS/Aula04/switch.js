// avaliação de atendimento.

// Ótimo :D - 1
// Bom :) - 2
// Regular :| - 3
// Ruim :( - 4
// Péssimo >:( - 5
let avaliar_atendimento = Number(prompt(`Avalie nosso atendimento de 1 a 5`))
switch (avaliar_atendimento) {
    case 1:
        alert(`O atendimento foi avaliado como: Ótimo`);
        break;
    case 2:
        alert(`O atendimento foi avaliado como: Bom`);
        break;
    case 3:
        alert(`O atendimento foi avaliado como: Regular`);
        break;
    case 4:
        alert(`O atendimento foi avaliado como: Ruim`);
        break;
    case 5:
        alert(`O atendimento foi avaliado como: Péssimo`);
        break;

    default:
        alert(`Atendimento não foi avaliado`);
        break;
}