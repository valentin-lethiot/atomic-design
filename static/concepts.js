export const citation = "The little things are included in the bigger things, which are included in even bigger things and so on"
export const auteur = "Brad Frost"

export const atomeTitle =
  "L'atome"

export const atome1 =
  "L'atome est la plus petite brique présente en atomic design. C'est un composant insécable, qui ne peut pas être " +
  "divisé en éléments plus petits. Il s'agit par exemple d'un bouton, un label ou un titre. Mais on peut même voir " +
  "encore plus petit. Une couleur ou une font appartiennent eux aussi à la catégorie des atomes.\n"
export const atome2 =
  "L'atome permet aussi de donner une identité à son site web. En effet, c'est grâce à ces petites briques que " +
  "nous allons garder une certaines harmonies tout le long de la navigation. Il faut donc bien réfléchir avant de " +
  "créer un atome afin de ne pas trop l'éloigner du design systems que nous somme en train de créer."

export const atome3 =
  "Enfin, l'atome n'a très souvent aucune utilitée à lui seul. En effet, une couleur ou un titre avec une valeur " +
  "par défaut n'a pas vraiment d'intérêt. C'est en combinant plusieurs atomes que les choses commencent vraiment " +
  "à avoir du sens.\n"



export const moleculeTitle =
  "La molécule"

export const molecule1 =
  "La molécule est un regroupement de plusieurs atomes ensemble afin de former une première brique fonctionnelle pour " +
  "notre application. Ils agissent un peu comme la colonne vertebrale de notre design system. Par exemple, cela peut " +
  "être un formulaire de connexion. Ou encore un champ de recherche avec 3 atomes distincts : 1 label, 1 input et " +
  "1 bouton.\n"
export const molecule2 =
  "C'est à partir de la molécules que le développeur web doit commencer à penser responsive. En effet, c'est ici qu'il " +
  "commence à imaginer comment les atomes se comportent ensemble selon la taille d'écran sur laquelle ils sont affichés." +
  " Deux atomes qui forment une molécules peuvent se retrouver côte à côte sur grand écran et l'un en dessous de l'autre" +
  " sur un ecran plus petit."



export const organismeTitle =
  "L'organisme"

export const organisme1 =
  "Un organisme est une associations de plusieurs molécules afin de former un ensemble plus complexe et plus fonctionnel." +
  " Il s'agit par exemple d'un header, d'une navbar ou d'un footer. Ces plus gros composants représentent les éléments" +
  " finaux de l'interface.\n"

export const organisme2 =
  "Ces composants peuvent rassembler plusieurs molécules exactement similaire avec des valeurs différentes (navbar), ou" +
  " des molécules totalement différentes (footer). Brad Frost parle ici de **passage de l'abstrait vers le concret**.\n"

export const organisme3 =
  "Ici aussi il faut penser responsive. Mais puisque nous avons déjà réfléchis et développé nos molécules de manières à" +
  " ce qu'elles s'adaptent comme nous le voulons selon les différentes tailles d'écrans, il nous suffit, dans cette " +
  "étape, de gérer la cohabition des molécules ensemble."



export const templateTitle =
  "Le template"

export const template1 =
  "Le template représente le squelette de nos pages. Pour faire simple, il agit exactement comme une page mais il ne " +
  "possède que des valeurs par défault. Il n'y aura donc logiquement pas de réel image ou de contenu utile."

export const template2 =
  "Ces templates sont un bon moyen pour montrer très rapidement au client à quoi ressemblera le site web qu'il a " +
  "commandé. De ce fait, chaque changement voulu par le client pourra se faire efficacemment, en amont du développement " +
  "et permettra une très bonne compréhension des besoins du client."

export const template3 =
  "Les templates sont aussi très utiles pour la communication entre les designers et les développeurs. En effet, les " +
  "designers donnent aux développeurs une maquette, utilisant exactement les mêmes composants que les développeurs " +
  "auront à disposition après les avoir construit. Enfin, des templates selon différentes tailles d'écrans permettront " +
  "d'avoir une vision globale et précise du comportement que l'on attends du site."



export const pageTitle =
  "La page"

export const page1 =
  "La page n'est rien d'autre qu'une instance, une variation d'un template. La page est un template dans lequel on a " +
  "remplacé les valeurs par défault par les véritables valeurs attendues. C'est la \"chair placée sur le squelette\"."

export const page2 =
  "Cette étape nous permet de nous rendre compte très facilement de comment notre site se comporte réellement. Elle " +
  "nous permet aussi de visualiser comment la page se comporte lors d'actions menées par l'utilisateur. Par exemple, " +
  "de quoi la page aura l'air avec une notifications en plus, ou avec une erreur lors de la création d'un compte. " +
  "Cette étape est surtout destiné aux designers pour leurs permettre de réellement se rendre compte de comment la page " +
  "se comportera dans certaines situations concrétes."



export const resumeTitle =
  "Résumons"

export const resume =
  "Voici donc les 5 étapes à suivre lorsque l'on développe un site web en atomic design. Une comparaison qui me plait " +
  "particulièrement est celle de voir ce type de développement comme une boîte de LEGO.\n" +
  "\n" +
  "En effet, jouer avec des LEGOs revient à jouer avec son design system."

export const resumeAtome =
  "Nous avons les atomes :\n"

export const resume2 =
  "Qui ensembles forment des molécules :\n"

export const resume3 =
  "Qui, associées, forment des composants beaucoup plus complexes, les organismes :\n"

export const resume4 =
  "Et ces derniers peuvent être détournées en une quasi infinité de pages, d'histoires tout droit sorties de " +
  "l'imagination. Les templates peuvent facilement être comparé aux scènes que l'on trouve sur les boîtes de LEGO. " +
  "C'est un exemple d'histoire, avec des valeurs par default, qui peut être remplacé par une histoire inventé, avec " +
  "de vrai valeurs."
