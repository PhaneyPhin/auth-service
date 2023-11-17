
import { Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  business_single_id: string;

  @Column()
  business_name_en: string;

  @Column()
  business_name_km: string;

  @Column()
  business_vat_tin: string;

  @Column()
  invoice_webhook: string;

  @Column()
  city_name: string;

  @Column()
  postal_zone: string;

  @Column()
  country_code: string;

  @Column()
  tax_scheme: string;

  @Column()
  contact_name: string;

  @Column()
  contact_phone: string;

  @Column()
  contact_email: string;

  @Column({ type: 'text', nullable: true})
  access_token: string | undefined | null
}
