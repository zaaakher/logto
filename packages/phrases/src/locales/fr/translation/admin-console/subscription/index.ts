import quota_item from './quota-item.js';
import quota_table from './quota-table.js';

const subscription = {
  free_plan: 'Plan Gratuit',
  free_plan_description:
    'Pour les projets secondaires et les premiers essais de Logto. Aucune carte de crédit.',
  hobby_plan: 'Plan Hobby',
  hobby_plan_description:
    'Pour les développeurs individuels ou les environnements de développement.',
  pro_plan: 'Plan Professionnel',
  pro_plan_description: 'Pour les entreprises qui bénéficient de Logto sans soucis.',
  enterprise: 'Entreprise',
  current_plan: 'Plan Actuel',
  current_plan_description:
    "Il s'agit de votre plan actuel. Vous pouvez consulter l'utilisation du plan, votre prochaine facture et passer à un plan de niveau supérieur si vous le souhaitez.",
  plan_usage: 'Utilisation du plan',
  plan_cycle: "Cycle du plan: {{period}}. L'utilisation est renouvelée le {{renewDate}}.",
  next_bill: 'Votre prochaine facture',
  next_bill_hint: 'Pour en savoir plus sur le calcul, veuillez vous référer à cet <a>article</a>.',
  next_bill_tip:
    'Votre prochaine facture comprend le prix de base de votre plan pour le mois prochain, ainsi que le coût de votre utilisation multiplié par le prix unitaire MAU dans les différentes catégories.',
  manage_payment: 'Gérer le Paiement',
  overfill_quota_warning:
    'Vous avez atteint votre limite de quota. Pour éviter tout problème, passez à un plan supérieur.',
  upgrade_pro: 'Passer au Plan Professionnel',
  payment_error:
    // eslint-disable-next-line no-template-curly-in-string
    'Problème de paiement détecté. Impossible de traiter ${{price, number}} pour le cycle précédent. Mettez à jour le paiement pour éviter la suspension du service Logto.',
  downgrade: 'Passer à un Plan Inférieur',
  current: 'Actuel',
  buy_now: 'Acheter maintenant',
  contact_us: 'Contactez-nous',
  quota_table,
  billing_history: {
    invoice_column: 'Factures',
    status_column: 'Statut',
    amount_column: 'Montant',
    invoice_created_date_column: 'Date de création de la facture',
  },

  quota_item,

  downgrade_modal: {
    title: 'Êtes-vous sûr de vouloir passer à un Plan Inférieur?',
    description:
      "Si vous choisissez de passer au <targetName/> , notez que vous n'aurez plus accès aux quotas et fonctionnalités qui se trouvaient auparavant dans <currentName/>. ",
    before: 'Avant: <name/>',
    after: 'Après: <name />',
    downgrade: 'Passer à un Plan Inférieur',
    not_eligible: "Vous n'êtes pas éligible pour passer à un Plan Inférieur",
    not_eligible_description:
      'Veuillez vous assurer de répondre aux critères suivants avant de passer au <name/>. ',
    a_maximum_of: 'Un maximum de <item/>',
    help_tip: "Besoin d'aide pour rétrograder ? <a>Contactez-nous</a>.",
  },
  upgrade_success: 'Passé avec succès à <name/>',
  downgrade_success: 'Rétrogradé avec succès à <name/>',
  subscription_check_timeout:
    "La vérification d'abonnement a expiré. Veuillez actualiser ultérieurement.",
};

export default subscription;