import { Coins, Lock, Pencil } from 'lucide-react';
import { FAQType, HelpType, PromoteItemType, RevokeAuthorityType } from './types';

export const faqs: FAQType[] = [
  {
    id: 0,
    question: 'What is Solana, and why should I launch my token on it?',
    answer:
      'Solana is a high-performance blockchain platform known for its fast transactions, low fees, and scalability. It&apos;s an excellent choice for launching tokens due to its growing ecosystem, strong developer community, and widespread adoption in the crypto space.',
  },
  {
    id: 1,
    question: 'How can I create a token on the Solana blockchain?',
    answer:
      'Creating a token on Solana is straightforward with our platform. Simply connect your wallet, fill in your token details (name, symbol, supply, etc.), customize settings if needed, and submit. Our tool handles all the technical aspects of token creation for you.',
  },
  {
    id: 2,
    question: 'What are the steps to deploy my own token on Solana?',
    answer:
      'The process involves: 1) Connecting your Solana wallet, 2) Providing token details like name and symbol, 3) Setting the supply and decimals, 4) Uploading token image and metadata, 5) Configuring optional settings like freeze authority, and 6) Confirming the transaction. Our platform guides you through each step.',
  },
  {
    id: 3,
    question: 'How can I manage token authorities on Solana?',
    answer:
      'Token authorities on Solana can be managed through our platform. You can set and revoke different authorities like freeze, mint, and update authority during token creation. These settings determine who can perform certain actions with your token after deployment.',
  },
  {
    id: 4,
    question: 'What platfroms can assist with launching a token on Solana',
    answer:
      'There are several platforms available, including CoinFast (our platform), which provides a user-friendly interface for token creation. Other options include Solana&apos;s CLI tools and various development frameworks, but our platform offers the most straightforward solution for non-technical users.',
  },
];

export const helps: HelpType[] = [
  { id: 1, text: 'Connect your Solana wallet.' },
  { id: 2, text: 'Write the name you want for your Token.' },
  { id: 3, text: 'Indicate the symbol (max 8 characters).' },
  { id: 4, text: 'Select the decimals quantity (0 for Whitelist Token, 6 for utility token).' },
  { id: 5, text: 'Write the description you want for your SPL Token.' },
  { id: 6, text: 'Upload the image for your token (PNG).' },
  { id: 7, text: 'Put the supply of your Token.' },
  { id: 8, text: 'Click on Create, accept the transaction, and wait until your token is ready.' },
];

export const revokeAuthorityItems: RevokeAuthorityType[] = [
  {
    id: 0,
    title: 'Revoke Freeze',
    content: 'Freeze Authority allows you to freeze token accounts of holders.',
    price: 0.1,
    logo: Lock,
    type: 'freezeable',
  },
  {
    id: 1,
    title: 'Revoke Mint',
    content: 'Mint Authority allows you to mint more supply of your token.',
    price: 0.1,
    logo: Coins,
    type: 'mintable',
  },
  {
    id: 2,
    title: 'Revoke Update',
    content: 'Update Authority allows you to update the token metadata about your token.',
    price: 0.1,
    logo: Pencil,
    type: 'updateable',
  },
];

export const promoteItems: PromoteItemType[] = [
  {
    id: 2,
    title: 'silver',
    price: 0.5,
    benefits: ['Second position on trending page', 'Promote for 30 minutes', 'Great visibility for your token'],
    fromColor: 'from-blue-500',
    viaColor: 'via-purple-500',
    toColor: 'to-pink-500',
    textColor: 'text-blue-400'
  },
  {
    id: 1,
    title: 'gold',
    price: 1,
    benefits: ['Top position on trending page', 'Promote for 60 minutes', 'Highest visibility duration'],
    fromColor: 'from-yellow-500',
    viaColor: 'via-purple-500',
    toColor: 'to-pink-500',
    textColor: 'text-yellow-400'
  },
  {
    id: 3,
    title: 'bronze',
    price: 0.25,
    benefits: ['Third position on trending page', 'Promote for 15 minutes', 'Good visibility for your token'],
    fromColor: 'from-green-500',
    viaColor: 'via-blue-500',
    toColor: 'to-purple-500',
    textColor: 'text-green-400'
  },
];
